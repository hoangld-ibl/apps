import { observable, decorate, action } from "mobx";

class Counts {
    counts = 0;

    tick = () => {
        this.counts++;
    }
}

decorate(Counts, {
    counts: observable,
    tick: action,
});

export default Counts;
