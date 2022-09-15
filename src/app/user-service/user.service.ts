export class UserService {

  public users = [
    {name: 'John'},
    {name: 'Bob'},
    {name: 'Nick'}
  ]

  constructor() { }

  getAll() {
    return this.users;
  }

  delete(name: string) {
    this.users = this.users.filter(user => user.name !== name);
    return this.users;
  }

  add(name: string) {
    if (!name) {
      return;
    }
    this.users.push({name})
  }
}
