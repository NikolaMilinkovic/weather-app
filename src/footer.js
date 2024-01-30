const body = document.querySelector('body');

const crateFooterElements = () => {
    const gitLabel = document.createElement('para');
    const gitPara = document.createElement('a');

    gitLabel.setAttribute('class', 'footer-label');
    gitPara.setAttribute('id', 'git-para');
    gitPara.setAttribute('href', 'https://github.com/NikolaMilinkovic');
    gitPara.setAttribute('target', '_blank');
    gitPara.setAttribute('rel', 'noopener noreferrer');

    gitLabel.innerHTML = 'Made by';
    gitPara.innerHTML = 'Nikola Milinkovic';

    return [gitLabel, gitPara];
};

const createFooter = () => {
    const footerDiv = document.createElement('div');
    const footerChildDiv = document.createElement('div');
    footerDiv.setAttribute('id', 'footer-container');
    footerChildDiv.setAttribute('id', 'footer-info-container');

    const els = crateFooterElements();
    els.forEach((element) => {
        footerChildDiv.appendChild(element);
    });

    footerDiv.appendChild(footerChildDiv);

    return footerDiv;
};

const displayFooter = () => {
    body.appendChild(createFooter());
};

export default displayFooter;
