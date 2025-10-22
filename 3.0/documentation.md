# DnD3 - Documentation
## Species
### AI
#### Sintaxis
##### DMG
```
TYPE: string          // required
VALUE: string         // required
TARGET: enum          // required (FRONT | RANDOM | LOWEST_HP | HIGHEST_HP)
REC?: string          // optional "<N>|<TYPE>"   where TYPE = DEALED | FINAL
```

```json
{
    "TYPE":"DMG",
    "VALUE":"D50 * 2 + D4",
    "TARGET":"FRONT",
    "REC":"30%|FINAL"
}
```