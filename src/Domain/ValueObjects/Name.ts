class Name {
  private readonly firstName: string;
  private readonly lastName: string;

  private constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public getFullName(): string {
    return this.firstName + this.lastName;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public static create(firstName: string, lastName: string): Name {
    return new Name(firstName, lastName);
  }
}

export default Name;