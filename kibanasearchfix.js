function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function kibanaSearchFix() {
    let i = 0;
    while (!document.getElementsByClassName("typeahead-items")[0] && i < 30) {
        await sleep(1000);
        i++;
        console.log('waiting for search bar to be present in DOM (' + i + ' seconds)')
    }
    if (i <= 30) {
        document.getElementsByClassName("typeahead-items")[0].setAttribute("style", "top:32px");
        console.log("fixed kibana search bar");
    } else {
        console.log('timeout')
    }
}

kibanaSearchFix();