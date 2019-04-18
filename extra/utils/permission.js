let permission = {
  getUsers: {
    all: ['head-trainer'],
    read: ['trainee', 'trainer'],
    write: ['trainer'],
    delete: [],
  }
}
function hasPermission(module, role, permissionType) {

  for (let result1 in permission[module]) {
    for (let result2 in permission[module][result1]) {
      return permission[module][permissionType][result2] == role || permission[module]['all'] == role;
    }
  }
}
console.log(hasPermission('getUsers', 'trainer', 'delete'));


