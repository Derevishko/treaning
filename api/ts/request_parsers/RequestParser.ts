class RequestParser {
  public parse(req: any) {
    return req;
  }

  public check(data: any, rules: Array<{ name: string, type: string }>): void {
    const errors: Array<string> = [];
    rules.forEach(rule => {
      data[rule.name]
    })
  }

  private int(data: any, options: any) {
    if (data === parseInt(data)) {
      return true;
    }
    return false
  }
}

export default RequestParser;