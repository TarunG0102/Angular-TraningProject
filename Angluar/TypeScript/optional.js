function sayhi(id, fname, lname) {
    console.log("ID", id);
    console.log("Name", fname);
    if (lname != undefined)
        console.log("lname", lname);
}
sayhi(123, "TARUN");
sayhi(123, "TARUN", "KUMAR");
