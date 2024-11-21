const { readFile } = require("fs");

const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
let file1, file2, file3, file4;
fs.readFile("firstname.txt", "utf-8")
  .then((data1) => {
    file1 = data1;
    return fs.readFile("lastname.txt", "utf8");
  })
  .then((data2) => {
    file2 = data2;
    return fs.readFile("age.txt", "utf-8"); //read firstname.txt and pass respone to next the
  })
  .then((data3) => {
    file3 = data3;
    return fs.readFile("hobbies.txt", "utf-8"); //read firstname.txt and pass respone to next the
  })
  .then((data4) => {
    file4 = data4;
    const hobbies = JSON.parse(data4);
    console.log(hobbies.join(" and "));

    console.log(
      `${file1} ${file2} is ${file3} years old and his hobbies are ${hobbies.join(
        " and "
      )}`
    );
  })
  .catch((err) => {
    console.error(err);
  });

// ASYNC/AWAIT SOLUTION BELOW THIS LINE
const readFiles = async () => {
  let firstname = await fs.readFile("firstname.txt", "utf-8");
  let lastname = await fs.readFile("lastname.txt", "utf-8");
  let age = await fs.readFile("age.txt", "utf-8");
  let hobbies = await fs.readFile("hobbies.txt", "utf-8");
  const hobbie = JSON.parse(await fs.readFile("hobbies.txt", "utf-8"));

  console.log(
    `${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbie[0]} and ${hobbie[1]}`
  );
};

readFiles();
