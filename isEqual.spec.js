describe('isEqual', () => {
  it('ignores trailing undefineds, but should it?', () => {
    expect([1, 2]).toEqual([1, 2, undefined]);
  });

  it('does not ignore leading and middle undefineds', () => {
    expect([1, 2]).not.toEqual([undefined, 1, 2]);
    expect([1, 2]).not.toEqual([1, undefined, 2]);
  });

  it('does not ignore trailing nulls', () => {
    expect([1, 2]).not.toEqual([1, 2, null]);
  });
});
