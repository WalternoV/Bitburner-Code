/** @param {NS} ns */
export async function main(ns) {

  var server, target, isNorm = true
  // = ns.args[0]


  if (ns.args[1] == null) {
    server = ns.args[0]
  } else {
    server = ns.args[0]
    target = ns.args[1]
    isNorm = false
  }

  const script = "hacktemp.js"

  const maxRam = ns.getServerMaxRam(server)
  const usedRam = ns.getServerUsedRam(server)
  const freeRam = maxRam - usedRam

  const scriptRam = ns.getScriptRam(script, "home")

  const maxThread = Math.floor(freeRam / scriptRam) 

  if (isNorm == false) {
    ns.exec(script, server, maxThread, target)
  } else {
    ns.exec(script, server, maxThread)
  }
}
