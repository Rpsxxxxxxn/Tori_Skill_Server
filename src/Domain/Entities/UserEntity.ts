import Name from "../ValueObjects/Name";
import Role from "../ValueObjects/Role";
import Time from "../ValueObjects/Time";

class UserEntity {
  public readonly id: number;
  public readonly name: Name;
  public readonly email: string;
  public readonly contactNumber: string;
  public readonly photoUrl: string;
  public readonly password: string;
  public readonly role: Role;
  public readonly createdAt: Time;
  public readonly updatedAt: Time;

  private constructor(
    readonly _id: number,
    readonly _firstName: string,
    readonly _lastName: string,
    readonly _contactNumber: string,
    readonly _photoUrl: string,
    readonly _email: string,
    readonly _password: string,
    readonly _role: string,
    readonly _createdAt: Date,
    readonly _updatedAt: Date
  ) {
    this.id = _id;
    this.email = _email;
    this.name = Name.create(_firstName, _lastName);
    this.contactNumber = _contactNumber;
    this.photoUrl = _photoUrl;
    this.password = _password;
    this.role = Role.create(_role);
    this.createdAt = Time.create(_createdAt);
    this.updatedAt = Time.create(_updatedAt);
  }

  public static create(
    id: number,
    firstName: string,
    lastName: string,
    contactNumber: string,
    photoUrl: string,
    email: string,
    password: string,
    role: string,
    createdAt: Date,
    updatedAt: Date
  ): UserEntity {
    return new UserEntity(
      id,
      firstName,
      lastName,
      contactNumber,
      photoUrl,
      email,
      password,
      role,
      createdAt,
      updatedAt
    );
  }
}

export default UserEntity;