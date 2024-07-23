<form action="/user" method="POST">
    @csrf
    <label for="name">Name</label>
    <input type="text" name="name">
    <label for="address">Address</label>
    <input type="text" name="address">
    <label for="image">Image</label>
    <input type="url" name="image">
    <button>Send</button>
</form>
