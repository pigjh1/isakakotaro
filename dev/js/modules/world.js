class World {
  constructor() {
    this.source = [];
    this.target = [];
    this.link = [];
    this.nodes = [];
    this.val = [];
    this.sourcesLen = 0;

    this.init();
  }

  init() {
    let self = this;

    self.dataFetch();

    setTimeout(function() {
      self.dataSet();
      self.setD3plus();
      self.setVuelist();
    }, 2000);
  }

  dataFetch() {
    let self = this;

    fetch('/assets/static/world-source.json')
      .then(response => response.json())
      .then(item => {
        self.sources = item;
      });
    fetch('/assets/static/world-target.json')
      .then(response => response.json())
      .then(item => {
        self.targets = item;
      });
    fetch('/assets/static/world.json')
      .then(response => response.json())
      .then(item => {
        self.links = item;
      });
  }

  dataSet() {
    let self = this;

    self.sourcesLen = self.sources.length;

    // val
    self.val = self.links;

    self.val.forEach(function(el, i) {
      let rs = self.sources.find(item => item.id === el.source);
      let rt = self.targets.find(item => item.id === el.target);

      el.source = rs.name;
      el.target = rt.name;
      el.desc = rt.desc;

      if (i === 0) {
        el.break = true;
      } else {
        el.break = el.target !== self.val[i-1].target ? true : false;
      }
    });

    // nodes
    let sou = self.sources;
    let tar = self.targets;

    sou.forEach(function(el) {
      el.size = 2;
    });
    tar.forEach(function(el, i) {
      let breker = 8;
      let range = 100;
      el.size = 1;
      el.color = '#DDD';
      el.x = Math.floor(i%breker) * range + range;
      el.y = Math.floor(i/breker) * range + range;
    });
    self.nodes = sou.concat(tar);
  }

  setD3plus() {
    let self = this;

    d3plus.viz()
      .container('#world-d3')
      .type('network')
      .data(self.nodes)
      .nodes(self.nodes)
      .edges({'value': self.val})
      .size('size')
      .color('color')
      .id('name')
      .draw();
  }

  setVuelist() {
    let self = this;

    new Vue({
      el: '#list',
      data() {
        return {
          val: self.val,
        };
      }
    });
  }
}

new World();
