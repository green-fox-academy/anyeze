
import { Carrier  } from "./carrier";
import { F35  } from "./f35";
import { F16  } from "./f16";



let keflavik = new Carrier(200,200);
let reykjavik = new Carrier(500,200);

keflavik.addAircraft(new F16());
keflavik.addAircraft(new F16());
keflavik.addAircraft(new F35());
keflavik.addAircraft(new F35());
keflavik.addAircraft(new F35());


reykjavik.addAircraft(new F35());
reykjavik.addAircraft(new F35());
reykjavik.addAircraft(new F35());
reykjavik.addAircraft(new F16());
reykjavik.addAircraft(new F16());

keflavik.fill();
reykjavik.fill();
console.log(keflavik.getStatus());
console.log(reykjavik.getStatus());
keflavik.fight(reykjavik);
console.log(keflavik.getStatus());
console.log(reykjavik.getStatus());
