class UserEntity {
    public id: number;
    public name: string;
    public email: string;
    public password: string;
    public role: string;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(id: number, name: string, email: string, password: string, role: string, createdAt: Date, updatedAt: Date) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

export default UserEntity;