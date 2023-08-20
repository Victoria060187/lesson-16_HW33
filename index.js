function generateList(array) {
    const ul = document.createElement("ul");
  
    for (const item of array) {
      const li = document.createElement("li");
  
      if (Array.isArray(item)) {
        li.appendChild(generateList(item));
      } else {
        li.textContent = item;
      }
  
      ul.appendChild(li);
    }
  
    return ul;
  }
  
  const data = ["1", "2", ["2.1", "2.2", "2.3"], "3", ["3.1", "3.2", ["3.2.1", "3.2.2", "3.2.3"]]];
  
  const container = document.createElement("div");
  container.appendChild(generateList(data));
  document.body.appendChild(container);