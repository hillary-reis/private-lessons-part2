module.exports = {
  age: function (timestamp) {
    const today = new Date();
    const birthDate = new Date (timestamp);
  
  
    let age = today.getFullYear() - birthDate.getFullYear();
  
    const month = today.getMonth() - birthDate.getMonth();
  
    if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
      age = age - 1;
    }
  
  
    return age
  },

  graduation: function (schooling) {
    let graduation = new String (schooling);

    if (graduation == "1") {
      graduation = "Ensino Médio Completo";

    } else if (graduation == "2") {
      graduation = "Ensino Superior Completo";

    } else if (graduation == "3") {
      graduation = "Mestrado";

    } else if (graduation == "4") {
      graduation = "Doutorado";

    } else {
      graduation = "Sem Formação Conhecida";
    };

    return graduation
  },

  date: function (timestamp) {
    const date = new Date (timestamp);

    const year = date.getUTCFullYear();
    const month = `0${date.getUTCMonth() + 1}`.slice(-2);
    const day = `0${date.getUTCDate()}`.slice(-2);

    return {
      day,
      month,
      year,
      iso: `${year}-${month}-${day}`,
      birthDay: `${day}/${month}`
    };
  },

  grade: function (schoolYear) {
    let grade = new String (schoolYear);

    if (grade == "5EF") {
      grade = "5° ano do Ensino Fundamental";

    } else if (grade == "6EF") {
      grade = "6° ano do Ensino Fundamental";

    } else if (grade == "7EF") {
      grade = "7° ano do Ensino Fundamental";

    } else if (grade == "8EF") {
      grade = "8° ano do Ensino Fundamental";

    } else if (grade == "9EF") {
      grade = "9° ano do Ensino Fundamental";
    } else if (grade == "1EM") {
      grade = "1° ano do Ensino Médio";
    } else if (grade == "2EM") {
      grade = "2° ano do Ensino Médio"
    } else if (grade == "3EM") {
      grade = "3° ano do Ensino Médio"
    } else {
      grade = "Sem Formação Conhecida";
    };

    return grade
  }

}