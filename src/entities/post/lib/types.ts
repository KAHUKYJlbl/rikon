export type NewPostType = {
  title: string,
  body: string,
}

export type PostType = NewPostType & {
  datetime: Date,
  id: string,
};
