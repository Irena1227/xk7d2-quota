window.DASH_DATA = {
  "updatedAt": "2026-10-15T14:45:01+08:00",
  "weather": {
    "ok": true,
    "provider": "cyberboss",
    "description": "晴",
    "iconKey": "clear",
    "tempC": 25.55,
    "feelsLikeC": 24.1,
    "humidity": 28.000000000000004,
    "windKph": 32.112,
    "windDir": "",
    "place": "北京",
    "observedAt": "2026-10-15T13:48:38+08:00",
    "fetchedAt": "2026-10-15T14:45:01+08:00",
    "error": null,
    "checkedAt": "2026-10-15T14:45:01+08:00",
    "lastSuccessAt": "2026-10-15T14:45:01+08:00",
    "stale": false
  },
  "sources": {
    "deepseek": {
      "ok": true,
      "label": "DeepSeek",
      "balance": 10.52,
      "currency": "CNY",
      "detail": "余额 ¥10.52",
      "fetchedAt": "2026-10-15T14:45:00+08:00",
      "error": null,
      "checkedAt": "2026-10-15T14:45:01+08:00",
      "lastSuccessAt": "2026-10-15T14:45:01+08:00",
      "stale": false
    },
    "claude": {
      "ok": true,
      "label": "Claude",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 21,
          "resetAt": "2026-10-14T13:39:59+08:00",
          "stale": true,
          "checkedAt": "2026-10-15T14:45:01+08:00",
          "lastSuccessAt": "2026-10-14T11:15:02+08:00"
        },
        {
          "name": "7天",
          "usedPct": 27,
          "resetAt": "2026-10-15T19:59:59+08:00",
          "stale": true,
          "checkedAt": "2026-10-15T14:45:01+08:00",
          "lastSuccessAt": "2026-10-14T11:15:02+08:00"
        },
        {
          "name": "Fable",
          "usedPct": 0,
          "resetAt": "2026-10-15T20:00:00+08:00",
          "stale": true,
          "checkedAt": "2026-10-15T14:45:01+08:00",
          "lastSuccessAt": "2026-10-14T11:15:02+08:00"
        }
      ],
      "fetchedAt": "2026-10-14T11:15:00+08:00",
      "error": "fetch failed",
      "checkedAt": "2026-10-15T14:45:01+08:00",
      "lastSuccessAt": "2026-10-14T11:15:02+08:00",
      "stale": true,
      "lastAttemptAt": "2026-10-15T14:45:01+08:00"
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
          "checkedAt": "2026-10-15T14:45:01+08:00",
          "lastSuccessAt": "2026-10-15T14:45:01+08:00"
        },
        {
          "name": "周",
          "usedPct": 0,
          "resetAt": "2026-10-22T14:44:58+08:00",
          "stale": false,
          "checkedAt": "2026-10-15T14:45:01+08:00",
          "lastSuccessAt": "2026-10-15T14:45:01+08:00"
        }
      ],
      "fetchedAt": "2026-10-15T14:45:00+08:00",
      "error": null,
      "checkedAt": "2026-10-15T14:45:01+08:00",
      "lastSuccessAt": "2026-10-15T14:45:01+08:00",
      "stale": false
    },
    "kimi": {
      "ok": true,
      "label": "Kimi",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 0,
          "resetAt": "2026-10-15T18:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-10-15T14:45:01+08:00",
          "lastSuccessAt": "2026-10-15T14:45:01+08:00"
        },
        {
          "name": "周",
          "usedPct": 0,
          "resetAt": "2026-10-16T13:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-10-15T14:45:01+08:00",
          "lastSuccessAt": "2026-10-15T14:45:01+08:00"
        },
        {
          "name": "月",
          "usedPct": 76,
          "resetAt": "2026-10-15T00:00:00+08:00",
          "observedAt": "2026-10-14T08:00:05+08:00",
          "stale": true,
          "healthCode": "monthly_login_required",
          "healthMessage": "月额度获取失败，当前为旧值",
          "checkedAt": "2026-10-15T14:45:01+08:00",
          "lastSuccessAt": "2026-10-14T08:00:05+08:00",
          "detailText": "⚠ 月额度获取失败，当前为旧值"
        }
      ],
      "fetchedAt": "2026-10-15T14:45:00+08:00",
      "error": "部分额度窗口沿用上次成功值",
      "checkedAt": "2026-10-15T14:45:01+08:00",
      "lastSuccessAt": "2026-10-15T14:45:01+08:00",
      "stale": false,
      "partialStale": true,
      "quotaWatch": {
        "status": "anomaly",
        "code": "monthly_login_required",
        "target": "月",
        "message": "月额度获取失败，当前为旧值",
        "firstSeenAt": "2026-10-15T00:00:02+08:00",
        "checkedAt": "2026-10-15T14:45:01+08:00",
        "weeklyIncreasePct": 0,
        "fiveHourIncreasePct": 0,
        "contradictionChecks": 0,
        "lastMonthlyObservedAt": "2026-10-14T08:00:05+08:00",
        "monthlyValue": 76,
        "monthlyResetAt": "2026-10-15T00:00:00+08:00",
        "notifiedStatus": "anomaly",
        "lastNotifiedAt": "2026-10-15T00:00:02+08:00",
        "lastNotificationAttemptAt": "2026-10-15T00:00:02+08:00",
        "notificationError": null
      }
    }
  },
  "quote": {
    "text": "惟江上之清风，与山间之明月，耳得之而为声，目遇之而成色，取之无禁，用之不竭。",
    "source": "苏轼《赤壁赋》"
  }
};
