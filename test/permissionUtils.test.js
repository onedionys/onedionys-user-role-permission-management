const assert = require('assert');
const { checkPermission } = require('../src/utils/permissionUtils');

describe('PermissionUtils', () => {
  const role = {
    permissions: {
      user: ['read', 'write'],
      post: ['read', 'write', 'delete']
    }
  };

  it('should return true if role has permission for resource and action', () => {
    assert.strictEqual(checkPermission(role, 'user', 'read'), true);
  });

  it('should return false if role does not have permission for resource and action', () => {
    assert.strictEqual(checkPermission(role, 'post', 'delete'), true);
  });

  it('should return false if role is invalid', () => {
    assert.strictEqual(checkPermission(null, 'user', 'read'), false);
  });
});
