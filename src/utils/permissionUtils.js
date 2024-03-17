// Function to check if user role has permission for given resource and action
function checkPermission(role, resource, action) {
    if (!role || !role.permissions) return false;
    const permissions = role.permissions[resource];
    return permissions ? permissions.includes(action) : false;
  }
  
  module.exports = { checkPermission };
  