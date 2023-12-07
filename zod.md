npm i zod

import { z } from "zod"

const dataSchema = z.record(
z.object({
division: z.string(),
events: z
.object({
title: z.string(),
date: z.string(),
notes: z.string(),
bunting: z.boolean(),
})
.array(),
})
);

const validData = dataSchema.parse(jsonData)

type DataX = z.infer<typeof dataSchema>

// record:egy olyan object aminek a kulcsai azok csomofele string kulcsa van, de mindig ugyanazok a valuek tartoznak hozza. Most egy olyan object aminek csomo fele kulcsa van, pl engldand-wales, scotland stb, de mindig tartozik hozzá egy ugyanolyan séma
