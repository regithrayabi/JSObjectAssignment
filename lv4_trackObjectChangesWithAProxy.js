function trackChanges(obj) {
  return new Proxy(obj, {
    set(target, property, value) {
      const previousValue = target[property];
      const action = property in target ? "Update" : "Add";
      console.log(`[${action}] ${String(property)}: ${previousValue} -> ${value}`);
      
      target[property] = value;
      return true; // 
    },
    deleteProperty(target, property) {
      if (property in target) {
        console.log(`[Delete] ${String(property)}: nilai '${target[property]}' dihapus`);
        delete target[property];
        return true;
      }
      return false;
    }
  });
}

const userProfile = trackChanges({ username: "admin", status: "active" });

userProfile.role = "moderator"; 

userProfile.status = "offline"; 

delete userProfile.username; 

console.log("Objek akhir:", userProfile);