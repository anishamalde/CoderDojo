const { isMergedString } = require("./randomSolution");

describe("isMergedString", () => {
  it("can handle some basic cases", () => {
    expect(isMergedString("codewars", "code", "wars")).toEqual(true);
  });

  it("can handle some empty parts", () => {
    expect(isMergedString("codewars", "codewars")).toEqual(true);
  });

  it("can handle too few characters", () => {
    expect(isMergedString("codewars", "code", "war")).toEqual(false);
    expect(isMergedString("codewars", "c", "o")).toEqual(false);
  });

  it("can handle extra characters", () => {
    expect(isMergedString("codewars", "code", "warss")).toEqual(false);
    expect(isMergedString("codewars", "codes", "wars")).toEqual(false);
  });

  it("can handle characters in wrong order", () => {
    expect(isMergedString("codewars", "code", "wasr")).toEqual(false);
    expect(isMergedString("codewars", "cwdr", "oeas")).toEqual(false);
  });

  it("can handle bananas", () => {
    expect(
      isMergedString("Bananas from Bahamas", "Bahas", "Bananas from am")
    ).toEqual(true);
  });

  it("can handle some random cases", () => {
    expect(
      isMergedString(
        "Can we merge it? No, we can't",
        "C  gi?es, we ca!",
        "anwemere t Yn"
      )
    ).toEqual(false);
    expect(
      isMergedString(
        "Can we merge it? No, we can't",
        "n e it , cn!",
        "Cawmerge ?Yeswe a"
      )
    ).toEqual(false);
    expect(
      isMergedString(
        "Can we merge it? No, we can't",
        "Cn m  Yewe",
        "a weergeit?s,  can!"
      )
    ).toEqual(false);
    expect(
      isMergedString(
        "Can we merge it? No, we can't",
        "C megt eswen!",
        "anwe re i?Y,  ca"
      )
    ).toEqual(false);
    expect(
      isMergedString(
        "Can we merge it? No, we can't",
        "ae mer i ,e!",
        "Cn wget?Yes w can"
      )
    ).toEqual(false);
    expect(
      isMergedString(
        "Can we merge it? No, we can't",
        "nwemg s, w a",
        "Ca  ere it?Yeecn!"
      )
    ).toEqual(false);
    expect(
      isMergedString(
        "Can we merge it? No, we can't",
        "Cnw mg it? Yes e ca!",
        "a eere,wn"
      )
    ).toEqual(false);
    expect(
      isMergedString(
        "Can we merge it? No, we can't",
        "Canwe i Ys wn",
        " merge t?e,e ca!"
      )
    ).toEqual(false);
    expect(
      isMergedString(
        "Can we merge it? No, we can't",
        "Cawer ?Y e c",
        "n  megeit es,wan!"
      )
    ).toEqual(false);
    expect(
      isMergedString(
        "Can we merge it? No, we can't",
        "aee i? Ye, can!",
        "Cn w mrgets we"
      )
    ).toEqual(false);
    expect(
      isMergedString(
        "Can we merge it? No, we can't",
        "Canw megit?Ye we ",
        " ere  s,can!"
      )
    ).toEqual(false);
    expect(
      isMergedString(
        "Can we merge it? No, we can't",
        " wmrit?Yescan!",
        "Cane ege  , we "
      )
    ).toEqual(false);
    expect(
      isMergedString(
        "Can we merge it? No, we can't",
        " w mg tYee!",
        "Caneerei? s, w can"
      )
    ).toEqual(false);
    expect(
      isMergedString(
        "Can we merge it? No, we can't",
        "Can w mergt?e, ean!",
        "ee i Ysw c"
      )
    ).toEqual(false);
    expect(
      isMergedString(
        "Can we merge it? No, we can't",
        "Ca w megei Y,ecan!",
        "ner t?es w "
      )
    ).toEqual(false);
    expect(
      isMergedString(
        "Can we merge it? No, we can't",
        "C ergit Yes, a",
        "an weme ? wecn!"
      )
    ).toEqual(false);
    expect(
      isMergedString(
        "Can we merge it? No, we can't",
        "e mreites,an",
        "Can weg ? Y we c!"
      )
    ).toEqual(false);
    expect(
      isMergedString(
        "Can we merge it? No, we can't",
        "Can eere ? s w c",
        "w mgitYe,ean!"
      )
    ).toEqual(false);
    expect(
      isMergedString(
        "Can we merge it? No, we can't",
        "n emerg ?, can",
        "Caw eit Yeswe !"
      )
    ).toEqual(false);
    expect(
      isMergedString(
        "Can we merge it? No, we can't",
        "eret es w ca!",
        "Can w meg i?Y,en"
      )
    ).toEqual(false);
  });

  it("can handle some even more random cases", () => {
    expect(
      isMergedString("X6`$Bo;JnohM&M2J=t-", "X`$;Jh&2t", "6BonoMMJ=-")
    ).toEqual(true);
  });

  it("can handle some tricky random cases", () => {
    expect(
      isMergedString(
        "g,^.:a`!;(Kg,^.:ajY6?mqLjvg",
        "g,^.:ajY6?",
        "g,^.:a`!;(KmqLjvg"
      )
    ).toEqual(true);
  });
});
