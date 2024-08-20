export class Upload {
  name: string;
  key: string;
  url: string;
  size: number;
  created_at: Date;

  constructor(
    name: string,
    key: string,
    url: string,
    size: number,
    created_at: Date
  ) {
    this.name = name;
    this.key = key;
    this.size = size;
    this.url = url;
    this.created_at = created_at;
  }
}
