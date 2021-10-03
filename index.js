const $btn = document.getElementById("btn");

document.addEventListener("submit", (e) => {
  e.preventDefault();

  const $root = document.getElementById("root"),
    $last = $root.lastChild;

  $root.removeChild($root.lastChild);

  todo();
});

function todo() {
  let uno = document.getElementById("1"),
    res1 = uno.value,
    dos = document.getElementById("2"),
    res2 = dos.value,
    tres = document.getElementById("3"),
    res3 = tres.value,
    cuatro = document.getElementById("4"),
    res4 = cuatro.value,
    c5 = document.getElementById("5"),
    res5 = c5.value,
    c6 = document.getElementById("6"),
    res6 = c6.value,
    c7 = document.getElementById("7"),
    res7 = c7.value,
    c8 = document.getElementById("8"),
    res8 = c8.value,
    c9 = document.getElementById("9"),
    res9 = c9.value,
    c10 = document.getElementById("10"),
    res10 = c10.value,
    c11 = document.getElementById("11"),
    res11 = c11.value,
    c12 = document.getElementById("12"),
    res12 = c12.value,
    c13 = document.getElementById("13"),
    res13 = c13.value,
    c14 = document.getElementById("14"),
    res14 = c14.value,
    c15 = document.getElementById("15"),
    res15 = c15.value,
    c16 = document.getElementById("16"),
    res16 = c16.value,
    c17 = document.getElementById("17"),
    res17 = c17.value,
    c18 = document.getElementById("18"),
    res18 = c18.value,
    c19 = document.getElementById("19"),
    res19 = c19.value,
    c20 = document.getElementById("20"),
    res20 = c20.value;

  function r1(res1) {
    let ac = 0;

    if (res1 == 2) {
      ac = 1;
    } else {
      ac = 0;
      const select = document.getElementById("select1");

      setTimeout(function () {
        select.appendChild(no());
      }, 400);
      
      function no() {
        const $h2 = document.createElement("h2"),
          acier = aciert;

        $h2.innerHTML = `<h2> La respuesta es: 1990</h2>`;
        $h2.classList.add("error");
        return $h2;
      }
    }

    return ac;
  }

  function r2(res2) {
    let ac = 0;

    if (res2 == 1) {
      ac = 1;
    } else {
      ac = 0;
      const select = document.getElementById("select2");

      setTimeout(function () {
        select.appendChild(no());
      }, 400);
      
      function no() {
        const $h2 = document.createElement("h2"),
          acier = aciert;

        $h2.innerHTML = `<h2> La respuesta es: Antonio</h2>`;
        $h2.classList.add("error");
        return $h2;
    }
    }
    return ac;
  }

  function r3(res3) {
    let ac = 0;

    if (res3 == 2) {
      ac = 1;
    } else {
      ac = 0;
      const select = document.getElementById("select3");

      setTimeout(function () {
        select.appendChild(no());
      }, 400);
      
      function no() {
        const $h2 = document.createElement("h2"),
          acier = aciert;

        $h2.innerHTML = `<h2> La respuesta es: Atlas</h2>`;
        $h2.classList.add("error");
        return $h2;
    }
    }
    return ac;
  }

  function r4(res4) {
    let ac = 0;

    if (res4 == 1) {
      ac = 1;
    } else {
      ac = 0;
      const select = document.getElementById("select4");

      setTimeout(function () {
        select.appendChild(no());
      }, 400);
      
      function no() {
        const $h2 = document.createElement("h2"),
          acier = aciert;

        $h2.innerHTML = `<h2> La respuesta es: Clinica 1</h2>`;
        $h2.classList.add("error");
        return $h2;
    }
    }
    return ac;
  }

  function r5(res5) {
    let ac = 0;

    if (res5 == 2) {
      ac = 1;
    } else {
      ac = 0;
      const select = document.getElementById("select5");

      setTimeout(function () {
        select.appendChild(no());
      }, 400);
      
      function no() {
        const $h2 = document.createElement("h2"),
          acier = aciert;

        $h2.innerHTML = `<h2> La respuesta es: Eaton 1</h2>`;
        $h2.classList.add("error");
        return $h2;
    }
    }
    return ac;
  }

  function r6(res6) {
    let ac = 0;

    if (res6 == 1) {
      ac = 1;
    } else {
      ac = 0;
      const select = document.getElementById("select6");

      setTimeout(function () {
        select.appendChild(no());
      }, 400);
      
      function no() {
        const $h2 = document.createElement("h2"),
          acier = aciert;

        $h2.innerHTML = `<h2> La respuesta es: Derecho</h2>`;
        $h2.classList.add("error");
        return $h2;
        }
    }

    return ac;
  }

  function r7(res7) {
    let ac = 0;

    if (res7 == 3) {
      ac = 1;
    } else {
      ac = 0;
      const select = document.getElementById("select7");

      setTimeout(function () {
        select.appendChild(no());
      }, 400);
      
      function no() {
        const $h2 = document.createElement("h2"),
          acier = aciert;

        $h2.innerHTML = `<h2> La respuesta es: Lavamex</h2>`;
        $h2.classList.add("error");
        return $h2;
        }
    }

    return ac;
  }

  function r8(res8) {
    let ac = 0;

    if (res8 == 3) {
      ac = 1;
    } else {
      ac = 0;
      const select = document.getElementById("select8");

      setTimeout(function () {
        select.appendChild(no());
      }, 400);
      
      function no() {
        const $h2 = document.createElement("h2"),
          acier = aciert;

        $h2.innerHTML = `<h2> La respuesta es: Empacador</h2>`;
        $h2.classList.add("error");
        return $h2;
        }
    }

    return ac;
  }

  function r9(res9) {
    let ac = 0;

    if (res9 == 2) {
      ac = 1;
    } else {
      ac = 0;
      const select = document.getElementById("select9");

      setTimeout(function () {
        select.appendChild(no());
      }, 400);
      
      function no() {
        const $h2 = document.createElement("h2"),
          acier = aciert;

        $h2.innerHTML = `<h2> La respuesta es: Matias Abdiel</h2>`;
        $h2.classList.add("error");
        return $h2;
        }
    }

    return ac;
  }

  function r10(res10) {
    let ac = 0;

    if (res10 == 1) {
      ac = 1;
    } else {
      ac = 0;
      const select = document.getElementById("select10");

      setTimeout(function () {
        select.appendChild(no());
      }, 400);
      
      function no() {
        const $h2 = document.createElement("h2"),
          acier = aciert;

        $h2.innerHTML = `<h2> La respuesta es: Armando</h2>`;
        $h2.classList.add("error");
        return $h2;
        }
    }

    return ac;
  }

  function r11(res11) {
    let ac = 0;

    if (res11 == 1) {
      ac = 1;
    } else {
      ac = 0;
      const select = document.getElementById("select11");

      setTimeout(function () {
        select.appendChild(no());
      }, 400);
      
      function no() {
        const $h2 = document.createElement("h2"),
          acier = aciert;

        $h2.innerHTML = `<h2> La respuesta es: Chivas 0-1 Atlas</h2>`;
        $h2.classList.add("error");
        return $h2;
        }
    }

    return ac;
  }

  function r12(res12) {
    let ac = 0;

    if (res12 == 2) {
      ac = 1;
    } else {
      ac = 0;
      const select = document.getElementById("select12");

      setTimeout(function () {
        select.appendChild(no());
      }, 400);
      
      function no() {
        const $h2 = document.createElement("h2"),
          acier = aciert;

        $h2.innerHTML = `<h2> La respuesta es: Nike</h2>`;
        $h2.classList.add("error");
        return $h2;
        }
    }

    return ac;
  }

  function r13(res13) {
    let ac = 0;

    if (res13 == 3) {
      ac = 1;
    } else {
      ac = 0;
      const select = document.getElementById("select13");

      setTimeout(function () {
        select.appendChild(no());
      }, 400);
      
      function no() {
        const $h2 = document.createElement("h2"),
          acier = aciert;

        $h2.innerHTML = `<h2> La respuesta es: 30</h2>`;
        $h2.classList.add("error");
        return $h2;
        }
    }

    return ac;
  }

  function r14(res14) {
    let ac = 0;

    if (res14 == 2) {
      ac = 1;
    } else {
      ac = 0;
      const select = document.getElementById("select14");

      setTimeout(function () {
        select.appendChild(no());
      }, 400);
      
      function no() {
        const $h2 = document.createElement("h2"),
          acier = aciert;

        $h2.innerHTML = `<h2> La respuesta es: Martin Arellano</h2>`;
        $h2.classList.add("error");
        return $h2;
        }
    }

    return ac;
  }

  function r15(res15) {
    let ac = 0;

    if (res15 == 1) {
      ac = 1;
    } else {
      ac = 0;
      const select = document.getElementById("select15");

      setTimeout(function () {
        select.appendChild(no());
      }, 400);
      
      function no() {
        const $h2 = document.createElement("h2"),
          acier = aciert;

        $h2.innerHTML = `<h2> La respuesta es: Rock </h2>`;
        $h2.classList.add("error");
        return $h2;
        }
    }

    return ac;
  }

  function r16(res16) {
    let ac = 0;

    if (res16 == 1) {
      ac = 1;
    } else {
      ac = 0;
      const select = document.getElementById("select16");

      setTimeout(function () {
        select.appendChild(no());
      }, 400);
      
      function no() {
        const $h2 = document.createElement("h2"),
          acier = aciert;

        $h2.innerHTML = `<h2> La respuesta es: Sebastian</h2>`;
        $h2.classList.add("error");
        return $h2;
        }
    }

    return ac;
  }

  function r17(res17) {
    let ac = 0;

    if (res17 == 3) {
      ac = 1;
    } else {
      ac = 0;
      const select = document.getElementById("select17");

      setTimeout(function () {
        select.appendChild(no());
      }, 400);
      
      function no() {
        const $h2 = document.createElement("h2"),
          acier = aciert;

        $h2.innerHTML = `<h2> La respuesta es: Cafe</h2>`;
        $h2.classList.add("error");
        return $h2;
        }
    }

    return ac;
  }

  function r18(res18) {
    let ac = 0;

    if (res18 == 2) {
      ac = 1;
    } else {
      ac = 0;
      const select = document.getElementById("select18");

      setTimeout(function () {
        select.appendChild(no());
      }, 400);
      
      function no() {
        const $h2 = document.createElement("h2"),
          acier = aciert;

        $h2.innerHTML = `<h2> La respuesta es: De 5 a 8</h2>`;
        $h2.classList.add("error");
        return $h2;
        }
    }

    return ac;
  }

  function r19(res19) {
    let ac = 0;

    if (res19 == 1) {
      ac = 1;
    } else {
      ac = 0;
      const select = document.getElementById("select19");

      setTimeout(function () {
        select.appendChild(no());
      }, 400);
      
      function no() {
        const $h2 = document.createElement("h2"),
          acier = aciert;

        $h2.innerHTML = `<h2> La respuesta es: Diana</h2>`;
        $h2.classList.add("error");
        return $h2;
        }
    }

    return ac;
  }

  function r20(res20) {
    let ac = 0;

    if (res20 == 2) {
      ac = 1;
    } else {
      ac = 0;
      const select = document.getElementById("select20");

      setTimeout(function () {
        select.appendChild(no());
      }, 400);
      
      function no() {
        const $h2 = document.createElement("h2"),
          acier = aciert;

        $h2.innerHTML = `<h2> La respuesta es: Carne Asada</h2>`;
        $h2.classList.add("error");
        return $h2;
        }
    }

    return ac;
  }

  const aciert =
    r1(res1) +
    r2(res2) +
    r3(res3) +
    r4(res4) +
    r5(res5) +
    r6(res6) +
    r7(res7) +
    r8(res8) +
    r9(res9) +
    r10(res10) +
    r11(res11) +
    r12(res12) +
    r13(res13) +
    r14(res14) +
    r15(res15) +
    r16(res16) +
    r17(res17) +
    r18(res18) +
    r19(res19) +
    r20(res20);
  console.log(aciert);

  const aux4 = (aciert * 100) / 20;

  const $rot = document.getElementById("root");
  setTimeout(function () {
    $rot.appendChild(si(aux4));
  }, 400);
}

export function si(aciert) {
  const $h1 = document.createElement("h1"),
    acier = aciert;

  $h1.innerHTML = `<h1> ${acier}% de aciertos</h1>`;
  $h1.classList.add("mensaje");
  return $h1;
}



