/** @param {NS} ns */
export async function main(ns) {

  const server = ns.args[0]
  const serScript = server + ".js"

  const relvl = ns.getServerRequiredHackingLevel(server)
  const hacklvl = ns.getHackingLevel()
  const serport = ns.getServerNumPortsRequired(server)
  
  if (relvl >= hacklvl || serport <= cport(ns)){
    ns.run("pkil.js", 1, server)
    await ns.asleep(400)
    ns.run("scpfile.js", 1, server)
    await ns.asleep(400)
    ns.run("srun.js", 1, server)
  } else {
    ns.tprint("Error: Server Required Hacking Level not reached.")
  }
  
  function cport(ns){
    let count = 0
    if (ns.fileExists("NUKE.exe")) count++;
    if (ns.fileExists("BruteSSH.exe")) count++;
    if (ns.fileExists("FTPCrack.exe")) count++;
    if (ns.fileExists("relaySMTP.exe")) count++;
    if (ns.fileExists("HTTPWorm.exe")) count++;
    if (ns.fileExists("SQLInject.exe")) count++;
    return count;
  }

}
