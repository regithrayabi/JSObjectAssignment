// 3. Add and delete properties
// Create a user object with username and email. Add an isActive property, then delete the email
// property.


const user = {
  username: 'regith_rayabi',
  email: 'regith@example.com'
};

user.isActive = true;
delete user.email;

console.log(user);