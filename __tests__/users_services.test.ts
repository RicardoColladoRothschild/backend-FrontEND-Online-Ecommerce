import Users from '../models/Users.model';
import UsersServices from '../services/users.services';
// Mock para Users.findOne -> this is to avoid using real consultations to the DB
jest.mock('../models/Users.model', () => ({
  findOne: jest.fn(),
}));

describe('UsersServices', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should throw an error if email is duplicated', async () => {
    // Arrange
    const mockedUser = {
      user_id: 1,
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
      name: 'John',
      lastName: 'Doe',
      address: '123 Main St',
    };

    // Mock para Users.findOne que simula un email duplicado
    Users.findOne.mockResolvedValueOnce(mockedUser);

    // Act
    const userService = new UsersServices(mockedUser);

    // Assert
    await expect(userService.createAUser()).rejects.toThrowError('There has been an internal Server Error, element email is duplicated');

    // Verificar que Users.findOne se llamó con el email correcto
    expect(Users.findOne).toHaveBeenCalledWith({
      where: { email: mockedUser.email },
    });
  });

  it('should not throw an error if email is not duplicated', async () => {
    // Arrange
    const mockedUser = {
      user_id: 1,
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
      name: 'John',
      lastName: 'Doe',
      address: '123 Main St',
    };

    // Mock para Users.findOne que simula que no hay email duplicado
    Users.findOne.mockResolvedValueOnce(null);

    // Act
    const userService = new UsersServices(mockedUser);

    // Assert
    await expect(userService.createAUser()).resolves.not.toThrowError();

    // Verificar que Users.findOne se llamó con el email correcto
    expect(Users.findOne).toHaveBeenCalledWith({
      where: { email: mockedUser.email },
    });
  });
});
