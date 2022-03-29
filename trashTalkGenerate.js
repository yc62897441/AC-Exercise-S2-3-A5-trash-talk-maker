function trashTalkGenerate(occupation) {
  // 除外狀況：未選擇職業時顯示提醒
  if (!occupation) {
    return `請先選擇職業`
  }

  // 定義垃圾會組成各部件，職業、任務、幹話
  const occupations = {
    engineer: "工程師",
    designer: "設計師",
    entrepreneur: "企業家",
  }
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點code', '加個班'],
    designer: ['畫一張圖', '改個logo', '順便幫忙設計一下', '隨便換個設計', '改個顏色'],
    entrepreneur: ['週末加班', '要能賺錢', '想個business model', '找VC募錢', '捐個200萬']
  }
  const phrase = ['很簡單啦', '很容易啦', '很快啦', '很正常啦', '輕輕鬆鬆啦', '小菜一疊啦']

  // 依職業隨機生成任務、幹話
  const taskRandom = task[occupation][Math.floor(Math.random() * task[occupation].length)]
  const phraseRandom = phrase[Math.floor(Math.random() * phrase.length)]

  // 組合垃圾話，並回傳
  let trashTalk = `${occupations[occupation]}${taskRandom}${phraseRandom}`
  return trashTalk
}

module.exports = trashTalkGenerate

