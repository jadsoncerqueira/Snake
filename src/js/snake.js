export default class Snake {
  constructor(arena) {
    this._arena = arena;
    this._rastro = [];
    this._tamanho = 1
    this._direcao = 0;
    this._posicao = {
      x: 5,
      y: 20,
    }
  }

  move() {
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                if(this._direcao === 2) {
                  this._direcao = 2
                } else {
                  this._direcao = 3
                }
                break;
            case 'ArrowDown':
                if(this._direcao === 3) {
                  this._direcao = 3
                } else {
                  this._direcao = 2
                }
                break;
            case 'ArrowLeft':
                if(this._direcao === 0) {
                  this._direcao = 0
                } else {
                  this._direcao = 1
                }
                break;
            case 'ArrowRight':
                if(this._direcao === 1) {
                  this._direcao = 1
                } else {
                  this._direcao = 0
                }
                break;
        
            default:
                break;
        }
    });
  }

  start(inter) {
    const x = this._posicao.x * this._arena._tamanhoPixel;
    const y = this._posicao.y * this._arena._tamanhoPixel;
    this._arena._contexto.fillStyle = '#3b3939';
    this._arena._contexto.fillRect(x,y, this._arena._tamanhoPixel, this._arena._tamanhoPixel);

    if(this._direcao === 0) this._posicao.x +=1;
    if(this._direcao === 1) this._posicao.x -=1;
    if(this._direcao === 2) this._posicao.y +=1;
    if(this._direcao === 3) this._posicao.y -=1;

    if(this._posicao.x < 0) this._posicao.x = this._arena._quant - 1;
    if(this._posicao.x > this._arena._quant - 1) this._posicao.x = 0;
    if(this._posicao.y < 0) this._posicao.y = (this._arena._altura /  this._arena._tamanhoPixel) - 1;
    if(this._posicao.y > (this._arena._altura /  this._arena._tamanhoPixel)- 1) this._posicao.y = 0;


    if(this._rastro.length <= this._tamanho) {
      this._rastro.push({x , y});
    } 
    if (this._rastro.length > this._tamanho) {
      const ultimo = this._rastro[0];
      this._arena._contexto.fillStyle = 'white';
      this._arena._contexto.strokeStyle = '#dbd9d9';
      this._arena._contexto.fillRect(
        ultimo.x,
        ultimo.y,
        this._arena._tamanhoPixel,
        this._arena._tamanhoPixel
      );
      this._arena._contexto.strokeRect(
        ultimo.x, ultimo.y,
        this._arena._tamanhoPixel,
        this._arena._tamanhoPixel
      );
      this._rastro.shift()
    }

    let veri = this._rastro.some((el, index) => {
      if (index !== this._rastro.length - 1) {
        return JSON.stringify(Object.values(el)) === JSON.stringify(Object.values({x, y}))
      }
      return false;
    });
    if(veri) clearInterval(inter);
    this.move();


  }
}