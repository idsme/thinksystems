export class FeedbackModel {
  constructor(  public id: number,
                public rating: string,
                public name: string,
                public comment: string,
  ) {}
}
