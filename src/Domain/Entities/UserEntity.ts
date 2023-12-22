import Name from "../ValueObjects/Name";
import Role from "../ValueObjects/Role";
import Time from "../ValueObjects/Time";

class UserEntity {
  public readonly id: number;
  public readonly name: Name;
  public readonly email: string;
  public readonly password: string;
  public readonly role: Role;
  public readonly createdAt: Time;
  public readonly updatedAt: Time;

  constructor(
    readonly _id: number,
    readonly _firstName: string,
    readonly _lastName: string,
    readonly _email: string,
    readonly _password: string,
    readonly _role: string,
    readonly _createdAt: Date,
    readonly _updatedAt: Date
  ) {
    this.id = _id;
    this.email = _email;
    this.name = Name.create(_firstName, _lastName);
    this.password = _password;
    this.role = Role.create(_role);
    this.createdAt = Time.create(_createdAt);
    this.updatedAt = Time.create(_updatedAt);
  }
}

export default UserEntity;