window.DASH_DATA = {
  "updatedAt": "2026-10-20T09:24:01+08:00",
  "weather": {
    "ok": true,
    "provider": "cyberboss",
    "description": "雨",
    "iconKey": "rain",
    "tempC": 12.65,
    "feelsLikeC": 10.2,
    "humidity": 53,
    "windKph": 36.288000000000004,
    "windDir": "",
    "place": "北京",
    "observedAt": "2026-10-20T08:39:30+08:00",
    "fetchedAt": "2026-10-20T09:24:01+08:00",
    "error": null,
    "checkedAt": "2026-10-20T09:24:01+08:00",
    "lastSuccessAt": "2026-10-20T09:24:01+08:00",
    "stale": false
  },
  "sources": {
    "deepseek": {
      "ok": true,
      "label": "DeepSeek",
      "balance": 10.56,
      "currency": "CNY",
      "detail": "余额 ¥10.56",
      "fetchedAt": "2026-10-20T09:24:00+08:00",
      "error": null,
      "checkedAt": "2026-10-20T09:24:01+08:00",
      "lastSuccessAt": "2026-10-20T09:24:01+08:00",
      "stale": false
    },
    "claude": {
      "ok": true,
      "label": "Claude",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 50,
          "resetAt": "2026-10-20T09:59:59+08:00",
          "stale": false,
          "checkedAt": "2026-10-20T09:24:01+08:00",
          "lastSuccessAt": "2026-10-20T09:24:01+08:00"
        },
        {
          "name": "7天",
          "usedPct": 34,
          "resetAt": "2026-10-22T19:59:59+08:00",
          "stale": false,
          "checkedAt": "2026-10-20T09:24:01+08:00",
          "lastSuccessAt": "2026-10-20T09:24:01+08:00"
        },
        {
          "name": "Fable",
          "usedPct": 0,
          "resetAt": "2026-10-22T20:00:00+08:00",
          "stale": true,
          "checkedAt": "2026-10-20T09:24:01+08:00",
          "lastSuccessAt": "2026-10-18T04:15:03+08:00"
        }
      ],
      "fetchedAt": "2026-10-20T09:24:00+08:00",
      "error": "部分额度窗口沿用上次成功值",
      "checkedAt": "2026-10-20T09:24:01+08:00",
      "lastSuccessAt": "2026-10-20T09:24:01+08:00",
      "stale": false,
      "partialStale": true
    },
    "codex": {
      "ok": true,
      "label": "Codex",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 0,
          "resetAt": null,
          "detailText": "↻ -",
          "stale": false,
          "checkedAt": "2026-10-20T09:24:01+08:00",
          "lastSuccessAt": "2026-10-20T09:24:01+08:00"
        },
        {
          "name": "周",
          "usedPct": 32,
          "resetAt": "2026-10-25T05:08:55+08:00",
          "stale": false,
          "checkedAt": "2026-10-20T09:24:01+08:00",
          "lastSuccessAt": "2026-10-20T09:24:01+08:00"
        }
      ],
      "fetchedAt": "2026-10-20T09:24:00+08:00",
      "error": null,
      "checkedAt": "2026-10-20T09:24:01+08:00",
      "lastSuccessAt": "2026-10-20T09:24:01+08:00",
      "stale": false
    },
    "kimi": {
      "ok": true,
      "label": "Kimi",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 17,
          "resetAt": "2026-10-20T13:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-10-20T09:24:01+08:00",
          "lastSuccessAt": "2026-10-20T09:24:01+08:00"
        },
        {
          "name": "周",
          "usedPct": 37,
          "resetAt": "2026-10-23T13:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-10-20T09:24:01+08:00",
          "lastSuccessAt": "2026-10-20T09:24:01+08:00"
        },
        {
          "name": "月",
          "usedPct": 5,
          "resetAt": "2026-11-14T00:00:00+08:00",
          "observedAt": "2026-10-19T08:00:04+08:00",
          "stale": true,
          "healthCode": "monthly_login_required",
          "healthMessage": "月额度获取失败，当前为旧值",
          "checkedAt": "2026-10-20T09:24:01+08:00",
          "lastSuccessAt": "2026-10-19T08:00:04+08:00",
          "detailText": "⚠ 月额度获取失败，当前为旧值"
        }
      ],
      "fetchedAt": "2026-10-20T09:24:00+08:00",
      "error": "部分额度窗口沿用上次成功值",
      "checkedAt": "2026-10-20T09:24:01+08:00",
      "lastSuccessAt": "2026-10-20T09:24:01+08:00",
      "stale": false,
      "partialStale": true,
      "quotaWatch": {
        "status": "anomaly",
        "code": "monthly_login_required",
        "target": "月",
        "message": "月额度获取失败，当前为旧值",
        "firstSeenAt": "2026-10-20T08:00:07+08:00",
        "checkedAt": "2026-10-20T09:24:01+08:00",
        "weeklyIncreasePct": 0,
        "fiveHourIncreasePct": 0,
        "contradictionChecks": 0,
        "lastMonthlyObservedAt": "2026-10-19T08:00:04+08:00",
        "monthlyValue": 5,
        "monthlyResetAt": "2026-11-14T00:00:00+08:00",
        "notifiedStatus": "anomaly",
        "lastNotifiedAt": "2026-10-20T08:00:07+08:00",
        "lastNotificationAttemptAt": "2026-10-20T08:00:07+08:00",
        "notificationError": null
      }
    }
  },
  "quote": {
    "text": "合抱之木，生于毫末；九层之台，起于累土；千里之行，始于足下。",
    "source": "老子《道德经》第六十四章"
  }
};
