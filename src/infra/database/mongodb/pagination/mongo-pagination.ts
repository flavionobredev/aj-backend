import { Pagination } from '@/data/db/protocols/pagination';
import { Model, FilterQuery } from 'mongoose';

export class MongoPagination<T> implements Pagination<T> {
  constructor(private readonly model: Model<T>) {}
  async paginate(
    params: Pagination.Params<FilterQuery<T>>,
  ): Promise<Pagination.Result<T>> {
    const countDocs = await this.model.countDocuments(params.query);
    if (!countDocs || params.page <= 0) {
      return {
        page: 1,
        content: [],
        totalPages: 1,
        totalElements: 0,
        empty: true,
        first: true,
        last: true,
        size: 0,
      };
    }

    const skip = params.limit * (params.page - 1);
    const content = await this.model
      .find(params.query, params.projection)
      .skip(skip)
      .limit(params.limit)
      .sort(params.sort);

    const totalPages =
      params.limit === 0 ? 1 : Math.ceil(countDocs / params.limit);

    return {
      content,
      empty: content.length < 1,
      first: params.page === 1,
      last: totalPages === params.page,
      size: params.limit,
      totalElements: countDocs,
      totalPages,
      page: params.page,
    };
  }
}
