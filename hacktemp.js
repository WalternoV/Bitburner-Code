/** @param {NS} ns */
export async function main(ns) {

  let server = ns.getHostname()
  let mamon, cumon 
  let misec, selvl
  

  if(server.startsWith("sub", 0,1,2)) {
    ns.tprint("Hacking Attempt ("+  server +" in Sub Server): Success")
    server = server.slice(3)
  } else {
    ns.tprint("Hacking Attempt ("+  server +"): Success")
  }

  while(true) {
    misec = ns.getServerMinSecurityLevel(server)
    selvl = ns.getServerSecurityLevel(server)
    cumon = ns.getServerMoneyAvailable(server)
    mamon = ns.getServerMaxMoney(server)
    
    if (misec < selvl) {
      await ns.weaken(server)
    } else if (cumon < mamon) {
      await ns.grow(server)
    } else {
      await ns.hack(server)
    }
  }
}
