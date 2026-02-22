/** @param {NS} ns */
export async function main(ns) {

  let server, target
  // = ns.args[0]


  if (ns.args[0] != null) {
    server = ns.args[0]
    target = ns.args[1]
    
  } else {
    server = ns.getHostname()
  }

  const script = "hacktemp.js"

  const maxRam = ns.getServerMaxRam(server)
  const usedRam = ns.getServerUsedRam(server)
  const freeRam = maxRam - usedRam

  const scriptRam = ns.getScriptRam(script, "home")

  const maxThread = Math.floor(freeRam / scriptRam) 
  ns.exec(script, server, maxThread, target)
}
