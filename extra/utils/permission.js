let permission = {
  getUsers: {
    all: ['head-trainer'],
    read: ['trainee', 'trainer'],
    write: ['trainer'],
    delete: [],
  }
}
export function hasPermission(module, role, permissionType) {

  for (let result1 in permission[module]) {
    for (let result2 in permission[module][result1]) {
      return permission[module][permissionType][result2] == role ||
      permission[module][permissionType] == role;
    }
  }
}
// console.log(hasPermission('getUsers', 'head-trainer', 'all'));


