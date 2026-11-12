window.DASH_DATA = {
  "updatedAt": "2026-11-12T12:54:11+08:00",
  "weather": {
    "ok": true,
    "provider": "cyberboss",
    "description": "雾霾",
    "iconKey": "fog",
    "tempC": 12.95,
    "feelsLikeC": 12.6,
    "humidity": 79,
    "windKph": 2.99,
    "windDir": "",
    "place": "北京",
    "observedAt": "2026-11-12T12:34:59+08:00",
    "fetchedAt": "2026-11-12T12:54:11+08:00",
    "error": null,
    "checkedAt": "2026-11-12T12:54:11+08:00",
    "lastSuccessAt": "2026-11-12T12:54:11+08:00",
    "stale": false
  },
  "sources": {
    "deepseek": {
      "ok": true,
      "label": "DeepSeek",
      "balance": 4.87,
      "currency": "CNY",
      "detail": "余额 ¥4.87",
      "fetchedAt": "2026-11-12T12:54:00+08:00",
      "error": null,
      "checkedAt": "2026-11-12T12:54:11+08:00",
      "lastSuccessAt": "2026-11-12T12:54:11+08:00",
      "stale": false
    },
    "claude": {
      "ok": true,
      "label": "Claude",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 1,
          "resetAt": "2026-11-12T17:49:59+08:00",
          "stale": false,
          "checkedAt": "2026-11-12T12:54:11+08:00",
          "lastSuccessAt": "2026-11-12T12:54:11+08:00"
        },
        {
          "name": "7天",
          "usedPct": 87,
          "resetAt": "2026-11-12T19:59:59+08:00",
          "stale": false,
          "checkedAt": "2026-11-12T12:54:11+08:00",
          "lastSuccessAt": "2026-11-12T12:54:11+08:00"
        },
        {
          "name": "Fable",
          "usedPct": 26,
          "resetAt": "2026-11-12T19:59:59+08:00",
          "stale": false,
          "checkedAt": "2026-11-12T12:54:11+08:00",
          "lastSuccessAt": "2026-11-12T12:54:11+08:00"
        }
      ],
      "fetchedAt": "2026-11-12T12:54:00+08:00",
      "error": null,
      "checkedAt": "2026-11-12T12:54:11+08:00",
      "lastSuccessAt": "2026-11-12T12:54:11+08:00",
      "stale": false
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
          "checkedAt": "2026-11-12T12:54:11+08:00",
          "lastSuccessAt": "2026-11-12T12:54:11+08:00"
        },
        {
          "name": "周",
          "usedPct": 10,
          "resetAt": "2026-11-18T15:20:40+08:00",
          "stale": false,
          "checkedAt": "2026-11-12T12:54:11+08:00",
          "lastSuccessAt": "2026-11-12T12:54:11+08:00"
        }
      ],
      "fetchedAt": "2026-11-12T12:54:00+08:00",
      "error": null,
      "checkedAt": "2026-11-12T12:54:11+08:00",
      "lastSuccessAt": "2026-11-12T12:54:11+08:00",
      "stale": false
    },
    "kimi": {
      "ok": true,
      "label": "Kimi",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 2,
          "resetAt": "2026-11-12T16:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-11-12T12:54:11+08:00",
          "lastSuccessAt": "2026-11-12T12:54:11+08:00"
        },
        {
          "name": "周",
          "usedPct": 90,
          "resetAt": "2026-11-13T13:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-11-12T12:54:11+08:00",
          "lastSuccessAt": "2026-11-12T12:54:11+08:00"
        },
        {
          "name": "月",
          "usedPct": 39.4,
          "resetAt": "2026-11-14T00:00:00+08:00",
          "observedAt": "2026-11-11T08:00:05+08:00",
          "stale": true,
          "healthCode": "monthly_login_required",
          "healthMessage": "月额度获取失败，当前为旧值",
          "checkedAt": "2026-11-12T12:54:11+08:00",
          "lastSuccessAt": "2026-11-11T08:00:05+08:00",
          "detailText": "⚠ 月额度获取失败，当前为旧值"
        }
      ],
      "fetchedAt": "2026-11-12T12:54:00+08:00",
      "error": "部分额度窗口沿用上次成功值",
      "checkedAt": "2026-11-12T12:54:11+08:00",
      "lastSuccessAt": "2026-11-12T12:54:11+08:00",
      "stale": false,
      "partialStale": true,
      "quotaWatch": {
        "status": "anomaly",
        "code": "monthly_login_required",
        "target": "月",
        "message": "月额度获取失败，当前为旧值",
        "firstSeenAt": "2026-11-12T08:00:07+08:00",
        "checkedAt": "2026-11-12T12:54:11+08:00",
        "weeklyIncreasePct": 0,
        "fiveHourIncreasePct": 0,
        "contradictionChecks": 0,
        "lastMonthlyObservedAt": "2026-11-11T08:00:05+08:00",
        "monthlyValue": 39.4,
        "monthlyResetAt": "2026-11-14T00:00:00+08:00",
        "notifiedStatus": "anomaly",
        "lastNotifiedAt": "2026-11-12T08:00:07+08:00",
        "lastNotificationAttemptAt": "2026-11-12T08:00:07+08:00",
        "notificationError": null
      }
    }
  },
  "quote": {
    "text": "悟已往之不谏，知来者之可追。实迷途其未远，觉今是而昨非。",
    "source": "陶渊明《归去来兮辞》"
  }
};
