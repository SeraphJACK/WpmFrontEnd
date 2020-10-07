// Waypoint List
function toggleList() {
  if (document.getElementById('list').classList.contains('hide')) {
    document.getElementById('search').value = "";
    updateList();
    show('list');
  } else {
    hide('list');
  }
}

let list = document.getElementById('list-content');

function updateList() {
  clearList();
  let query = document.getElementById('search').value;
  let wps = waypoints.map.values();
  let wp
  while (!(wp = wps.next()).done) {
    if (wp.value.available && wp.value.name.toLowerCase().includes(query.toLowerCase())) {
      appendList(wp.value);
    }
  }
}

function clearList() {
  list.innerHTML = "";
}

function appendList(wp) {
  let e = document.createElement("li");

  let name = document.createElement("span");
  name.innerText = wp.name;
  e.appendChild(name);

  let id = document.createElement("span");
  id.innerText = wp.identifier;
  e.appendChild(id);

  e.onclick = () => handleListClick(wp.identifier);
  list.appendChild(e);
}

function handleListClick(id) {
  let wp = waypoints.getI(id);
  config.nowChunkX = wp.x >> 4;
  config.nowChunkZ = wp.z >> 4;
  config.offsetX = config.offsetZ = 0;
  config.persist();
  render();
  hide('list');
}

document.getElementById('search').oninput = updateList
