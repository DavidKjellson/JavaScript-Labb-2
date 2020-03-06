    let load = document.querySelector('#helvete')
    load.style.display = 'block'
    load.style.margin = '100px auto'

    fetch('https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beers?key=2b6a1f95a207c89af69e25809c6b703a')
      .then(response => response.json())
      .then(result => {
        console.log(result)
        console.log(result.data)

        let beer = {
          1: result.data[4],
          2: result.data[12],
          3: result.data[38],
          4: result.data[20],
          5: result.data[10],
          6: result.data[11],
          7: result.data[7],
          8: result.data[49],
          9: result.data[27],
          10: result.data[2],
          11: result.data[34],
          12: result.data[44]
        }

        let grid = document.querySelector('#grid')

        let modal = document.createElement('div')
        modal.setAttribute('id', 'ex1')
        modal.setAttribute('class', 'modal')
        document.body.appendChild(modal)

        for (let [key, value] of Object.entries(beer)) {

          let a = document.createElement('a')
          a.setAttribute('href', '#ex1')
          a.setAttribute('rel', 'modal:open')
          grid.appendChild(a)

          let card = document.createElement('div')
          card.setAttribute('class', 'card')
          a.appendChild(card)

          let cardimage = document.createElement('div')
          cardimage.setAttribute('class', 'card_image')
          card.appendChild(cardimage)

          let beerimage = document.createElement('img')
          beerimage.setAttribute('src', value.labels.large)
          cardimage.appendChild(beerimage)

          let cardtitle = document.createElement('div')
          cardtitle.setAttribute('class', 'card_title title')
          card.appendChild(cardtitle)

          let beertitle = document.createElement('p')
          beertitle.textContent = value.name
          cardtitle.appendChild(beertitle)

          a.addEventListener('click', () => {
            modal.innerHTML = '<p class="name">' + value.name + '</p>' + '<br>' + '<strong>Style: </strong>' + '<p>' + value.style.name + '</p>' + '<br>' + '<strong>ABV: </strong>' + '<p>' + value.abv + '%' + '</p>' + '<br>' + '<p>' + value.description + '</p>' + '<br>'
            let smallimage = document.createElement('img')
            smallimage.setAttribute('src', value.labels.icon)
            modal.appendChild(smallimage)
          })
        }
        load.style.display = 'none'
      })