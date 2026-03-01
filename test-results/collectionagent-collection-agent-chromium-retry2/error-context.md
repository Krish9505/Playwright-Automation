# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - alert [ref=e2]
  - button "Log out" [ref=e4] [cursor=pointer]:
    - img [ref=e5]
    - generic [ref=e8]: Log out
  - generic [ref=e9]: V-0.5.0
  - generic [ref=e11]:
    - heading "Select Branch" [level=3] [ref=e13]
    - generic [ref=e14]:
      - combobox [ref=e15] [cursor=pointer]:
        - generic: Select a branch
        - img [ref=e16]
      - button "Submit" [ref=e18] [cursor=pointer]:
        - generic [ref=e19]: Submit
  - region "Notifications alt+T"
```