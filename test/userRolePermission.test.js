const assert = require('assert');
const UserRolePermission = require('../src');

describe('UserRolePermission', () => {
  const roles = {
    admin: {
      permissions: {
        user: ['read', 'write'],
        post: ['read', 'write', 'delete']
      }
    },
    user: {
      permissions: {
        user: ['read']
      }
    }
  };
  const userRolePermission = new UserRolePermission(roles);

  it('should return true if user has permission', () => {
    assert.strictEqual(userRolePermission.hasPermission('admin', 'user', 'read'), true);
  });

  it('should return false if user does not have permission', () => {
    assert.strictEqual(userRolePermission.hasPermission('user', 'post', 'write'), false);
  });
});
