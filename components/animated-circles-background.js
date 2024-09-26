class AnimatedCirclesBackground extends HTMLElement {
  constructor() {
    super();
    // Create a new style element
    const style = document.createElement("style");

    // Define the CSS rules
    style.textContent = /*css*/ ` 
        animated-circles-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh; /* Full height of the viewport */
            z-index: -1; /* Place the canvas behind the content */
        }`;

    // Append the style element to the head of the document
    document.head.appendChild(style);
    this.canvas = document.createElement("canvas");
    this.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.circles = [];
    this.circleDensity = 0.00005; // Adjust as needed
    this.mouse = { x: -100, y: -100 };
    this.resizeTimeout = null;

    this.createCircles();
    this.setupEventListeners();
    this.resizeCanvas();
    this.startAnimation();
  }

  connectedCallback() {
    this.resizeCanvas();
  }

  setupEventListeners() {
    window.addEventListener("resize", () => {
      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
      }
      this.resizeTimeout = setTimeout(() => {
        this.resizeCanvas();
      }, 50);
    });

    document.addEventListener("mousemove", (e) => {
      this.mouse.x = e.clientX - this.canvas.getBoundingClientRect().left;
      this.mouse.y = e.clientY - this.canvas.getBoundingClientRect().top;
    });
  }

  resizeCanvas() {
    this.canvas.width = this.clientWidth;
    this.canvas.height = this.clientHeight;
    this.initialCircleCount = Math.floor(
      this.canvas.width * this.canvas.height * this.circleDensity
    );
    this.createCircles();
  }

  createCircles() {
    while (this.circles.length < this.initialCircleCount) {
      this.circles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        speed: Math.random() + 0.1,
        direction: Math.random() * Math.PI * 2,
        radius: 2,
      });
    }
    while (this.circles.length > this.initialCircleCount) {
      this.circles.pop();
    }
  }

  clear() {
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  drawBackground() {
    if (this.ctx) {
      this.ctx.fillStyle = getComputedStyle(this).getPropertyValue("--canvas-background-color");
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  drawCircle() {
    for (const circle of this.circles) {
      if (this.ctx) {
        this.ctx.beginPath();
        this.ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = getComputedStyle(this).getPropertyValue("--circle-color");
        this.ctx.fill();
      }
    }
  }

  drawLine() {
    for (let i = 0; i < this.circles.length; i++) {
      for (let j = i + 1; j < this.circles.length; j++) {
        const circle1 = this.circles[i];
        const circle2 = this.circles[j];
        const dx = circle1.x - circle2.x;
        const dy = circle1.y - circle2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          if (this.ctx) {
            this.ctx.beginPath();
            this.ctx.moveTo(circle1.x, circle1.y);
            this.ctx.lineTo(circle2.x, circle2.y);
            this.ctx.strokeStyle = getComputedStyle(this).getPropertyValue("--line-color");
            this.ctx.lineWidth = 1 - distance / 100; 
            this.ctx.stroke();
          }
        }
      }
    }
  }

  update() {
    for (const circle of this.circles) {
      circle.x += Math.cos(circle.direction) * circle.speed;
      circle.y += Math.sin(circle.direction) * circle.speed;

      const dx = circle.x - this.mouse.x;
      const dy = circle.y - this.mouse.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 100) {
        circle.x += circle.x < this.mouse.x ? -1 : 1;
        circle.y += circle.y < this.mouse.y ? -1 : 1;
      }

      if (circle.x <= 0 || circle.x > this.canvas.width) {
        circle.direction = Math.PI - circle.direction;
        circle.speed = Math.random() + 0.1;
      }
      if (circle.y <= 0 || circle.y > this.canvas.height) {
        circle.direction = -circle.direction;
        circle.speed = Math.random() + 0.1;
      }
    }
  }

  startAnimation() {
    const draw = () => {
      this.clear();
      this.drawBackground();
      this.drawCircle();
      this.drawLine();
      this.update();
      requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);
  }
}

customElements.define("animated-circles-background", AnimatedCirclesBackground);
