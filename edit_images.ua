Files ← &fld $"images/_"
ReadImage ← °(img "png")◇&frab
MaxSize ← /↥≡(△ReadImage)Files
IncreaseHeight ← ⊂⊂0⊙0
IncreaseWidth ← ≡IncreaseHeight

FixImages ← ≡(&fwa:img"png"⍥IncreaseHeight ⊙⍥IncreaseWidth ⊃(∩(÷2)°[⊙⊙0]-△ReadImage|ReadImage|∘)) ⊃Files(¤MaxSize)

FixImages "biome"
FixImages "emote"
FixImages "npc"
