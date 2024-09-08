Files ← &fld $"images/_"
ReadImage ← °(img "png")◇&frab
MaxSize ← /↥≡(△ReadImage)Files
IncreaseHeight ← ⊂⊂0⊙0
IncreaseWidth ← ≡IncreaseHeight

WriteImage ← &fwa:img"png"

FixImages ← ≡(WriteImage⍥IncreaseHeight ⊙⍥IncreaseWidth ⊃(∩(÷2)°[⊙⊙0]-△ReadImage|ReadImage|∘)) ⊃Files(¤MaxSize)

RotateBiomeImages ← ≡(WriteImage↻¯2⊸ReadImage) Files "biome"

# FixImages "biome"
# FixImages "emote"
# FixImages "npc"
