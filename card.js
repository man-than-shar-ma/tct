
let cards = document.getElementById('cards');

for(let i=0;i<cs.length;i++){
    let col_sm_3 = document.createElement('div');
    col_sm_3.classList.add('col-sm-3');
    cards.appendChild(col_sm_3);

    let card_template = document.createElement('div');
    card_template.classList.add('card');
    col_sm_3.appendChild(card_template);

    let card_body = document.createElement('div');
    card_body.classList.add('card-body');
    card_template.appendChild(card_body);

    let card_title = document.createElement('h5');
    card_title.classList.add('card-title');
    card_title.innerHTML = `c${i+1}`;
    card_body.appendChild(card_title);
    
    let card_text = document.createElement('p');
    card_text.classList.add('card-text');
    card_text.innerHTML = cs[i];
    card_body.appendChild(card_text);

    let card_link = document.createElement('a');
    card_link.href = `c${i+1}`;
    card_link.classList.add('btn');
    card_link.classList.add('btn-dark');
    card_link.innerHTML = 'Follow Link';
    card_body.appendChild(card_link);
}

