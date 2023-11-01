# @gabortorma/espree-template-for-eslint-config

[@reediculous456/dayjs-business-days](https://github.com/reediculous456/dayjs-business-days) with updated hungarian holidays and additional working days from 2010 to 2024.

## Install

```bash
npm install @gabortorma/espree-template-for-eslint-config
```

## Import

```javascript
import dayjs from '@gabortorma/espree-template-for-eslint-config'

dayjs('2020-11-01').isHoliday() // true
dayjs('2020-10-15').isBusinessDay() // true
```
## Import plugin options only

```javascript
import { huOptions } from '@gabortorma/espree-template-for-eslint-config/dist/options'
```
#### Usage
```javascript
import dayjs from 'dayjs'
import dayjsBusinessDays from 'dayjs-business-days2'
import { huOptions } from '@gabortorma/espree-template-for-eslint-config/dist/options'

dayjs.extend(dayjsBusinessDays, huOptions)

```


## Usage Guide

See the original plugin: [@reediculous456/dayjs-business-days](https://github.com/reediculous456/dayjs-business-days)
