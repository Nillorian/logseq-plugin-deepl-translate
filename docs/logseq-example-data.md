# Logseq Example Data

This repository keeps reusable Logseq sample data in [src/__fixtures__/logseq-examples.ts](/home/nillorian/coding/logseq-plugin-deepl-translate/src/__fixtures__/logseq-examples.ts) for tests.

Use the raw examples below when you need the original Logseq-shaped reference data for prompts, agent context, or new fixtures.

## Headline AST

```clojure
([[["Heading"
    {:title [["Plain" "Feature: Replace with Translation"]],
     :tags [],
     :level 1,
     :anchor "Feature-3a-_Replace_with_Translation",
     :meta {:timestamps [], :properties []},
     :unordered false,
     :size 2}]
   {:start_pos 0, :end_pos 36}]])
```

## Headline Data

```clojure
{:block/uuid #uuid "69edc5c5-662d-4495-bfd6-c120dd891276",
 :block/properties {:heading 2},
 :block/journal? false,
 :block/left {:db/id 340},
 :block/properties-order (),
 :block/format :markdown,
 :block/content "## Feature: Replace with Translation",
 :db/id 341,
 :block/path-refs [{:db/id 332}],
 :block/parent {:db/id 332},
 :block/page {:db/id 332}}
```

## Sub-block AST

```clojure
([["Paragraph"
   [["Plain" "It preserves all "]
    ["Emphasis" [["Italic"] [["Plain" "formatting"]]]]
    ["Plain" " and "]
    ["Link"
     {:url ["Page_ref" "links"],
      :label [["Plain" ""]],
      :full_text "[[links]]",
      :metadata ""}]
    ["Plain" ", but may translate the "]
    ["Link"
     {:url ["Page_ref" "text in the links"],
      :label [["Plain" ""]],
      :full_text "[[text in the links]]",
      :metadata ""}]]
  {:start_pos 0, :end_pos 88}])
```

## Sub-block Data

```clojure
{:block/uuid #uuid "69edc5d8-0297-4a1c-a67b-ac058defd0ed",
 :block/properties {},
 :block/journal? false,
 :block/left {:db/id 342},
 :block/refs [{:db/id 345} {:db/id 359}],
 :block/format :markdown,
 :block/content
 "It preserves all *formatting* and [[links]], but may translate the [[text in the links]]",
 :db/id 343,
 :block/path-refs [{:db/id 332} {:db/id 345} {:db/id 359}],
 :block/parent {:db/id 341},
 :block/page {:db/id 332}}
```