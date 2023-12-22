class Role {
  constructor(private readonly role: string) {}

  public getRole(): string {
    return this.role;
  }

  public isAdmin(): boolean {
    return this.role === "admin";
  }

  public isUser(): boolean {
    return this.role === "user";
  }

  public isModerator(): boolean {
    return this.role === "moderator";
  }

  public static create(role: string): Role {
    return new Role(role);
  }
}

export default Role;