/** @param {NS} ns */
export async function main(ns) {

  const server = ns.args[0]
  //const server = "n00dles"
  const feedback = " is already getting hacked."

  const relvl = ns.getServerRequiredHackingLevel(server)
  const hacklvl = ns.getHackingLevel()
  const serport = ns.getServerNumPortsRequired(server)

  var finSer, subSer, isSub = false, subExi
  
  if (relvl <= hacklvl && serport <= cport(ns)){

    if (!ns.hasRootAccess(server)){
      portKill(ns)
      await ns.asleep(400)
    }

    if (!ns.fileExists("hacktemp.js", server )){
      if (getMaxRam != 0) {
        scpFile(server)
        await ns.asleep(400)
      } else {
        subSer = "sub" + server
        subExi = ns.serverExists(subSer)
        if (subExi == false){
          useSub(subSer)
          await ns.asleep(400)
        }
        if (!ns.fileExists("hacktemp.js", subSer)) {
          finSer = subSer
          scpFile(finSer)
          isSub = true
          await ns.asleep(400)
        }
      }
    }

    if (!ns.isRunning("hacktemp.js", server) && isSub == false) {
      ns.run("srun.js", 1, server)
      await ns.asleep(400)
    } else if (!ns.isRunning("hacktemp.js", server) && isSub == true) {
      ns.run("srun.js", 1, finSub)
      await ns.asleep(400)
    } else {
      ns.alert(server + feedback)
    }

  } else {
    ns.tprint("Error: Server Requirement not reached.")
  }

  function cport(ns){
    let count = -1
    if (ns.fileExists("NUKE.exe")) count++;
    if (ns.fileExists("BruteSSH.exe")) count++;
    if (ns.fileExists("FTPCrack.exe")) count++;
    if (ns.fileExists("relaySMTP.exe")) count++;
    if (ns.fileExists("HTTPWorm.exe")) count++;
    if (ns.fileExists("SQLInject.exe")) count++;
    return count;
  }
  
  function scpFile(server) {
    ns.scp("hacktemp.js", server, "home")
  }

  function portKill(ns) {
    if (ns.fileExists("SQLInject.exe")){
    ns.sqlinject(server)
    ns.print("SQLInject.exe executed.")
    }
    if (ns.fileExists("HTTPWorm.exe")){
      ns.httpworm(server)
      ns.print("HTTPWorm.exe executed.")
    }
    if (ns.fileExists("relaySMTP.exe")){
      ns.relaysmtp(server)
      ns.print("relaySMTP.exe executed.")
    }
    if (ns.fileExists("FTPCrack.exe")){
      ns.ftpcrack(server)
      ns.print("FTPCrack.exe executed.")
    }
    if (ns.fileExists("BruteSSH.exe")){
      ns.brutessh(server)
      ns.print("BruteSSH.exe executed.")
    } 
    if (ns.fileExists("NUKE.exe")){
      ns.nuke(server)
      ns.print("NUKE.exe executed.")
    }
  }

  function getMaxRam(ns) {
    let serMaxRam = ns.getServerMaxRam(server)
    return serMaxRam;
  }

  function useSub(server) {
    var curMon = ns.getServerMoneyAvailable("home")
    var serCos = ns.getPurchasedServerCost(1024)
    var subSer = "sub_" + server
    if (serCos <= curMon) {
      ns.purchaseServer(subSer, 1020) 
    } else {
      ns.alert("Error: Not enough money to purchase new Sub Server")
    }
  }
}
